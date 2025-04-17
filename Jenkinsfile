pipeline {
    agent any

    tools {
        maven 'maven3.8.5'
        jdk 'jdk-17'
    }

    environment {
        SONAR_TOKEN = credentials('sonar-token-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yaswanth6597/carematrix-ui.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Code Quality - SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar -Dsonar.login=$SONAR_TOKEN'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh 'chmod +x deploy-to-aws.sh'
                sh './deploy-to-aws.sh'
            }
        }
    }
}
