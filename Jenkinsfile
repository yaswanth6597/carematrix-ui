pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yaswanth6597/carematrix-ui.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Code Quality - SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "npx sonar-scanner \
                        -Dsonar.projectKey=carematrix-ui \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://18.225.95.101:9000/ \
                        -Dsonar.login=$SONAR_TOKEN"
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
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
