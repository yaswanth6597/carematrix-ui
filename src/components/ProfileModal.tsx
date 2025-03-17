import React, { useState } from 'react';
import { User } from '../types';
import { Pencil, X } from 'lucide-react';
import './ProfileModal.css'; // Make sure to import the CSS file

interface ProfileModalProps {
  user: User;
  onClose: () => void;
}

export function ProfileModal({ user, onClose }: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    alert('Profile update functionality will be implemented soon');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user); // Revert changes
    setIsEditing(false);
  };

  const renderField = (label: string, field: keyof User) => {
    const value = user[field];
  
    if (!value) return null;
  
    return (
      <div className="profile-field">
        <span className="profile-label">{label}</span>
        {isEditing ? (
          <input
            type="text"
            value={typeof value === 'string' || typeof value === 'number' ? value : ''}
            onChange={(e) => setEditedUser({ ...editedUser, [field]: e.target.value })}
            className="profile-input"
          />
        ) : (
          <span className="profile-text">
            {Array.isArray(value) ? (
              value.map((item, index) => (
                <span key={index} className="block">
                  {typeof item === 'string'
                    ? item
                    : JSON.stringify(item, null, 2) /* Handle objects properly */}
                </span>
              ))
            ) : typeof value === 'object' ? (
              JSON.stringify(value, null, 2) /* Convert objects to readable strings */
            ) : (
              value
            )}
          </span>
        )}
      </div>
    );
  };
  

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        {/* ✅ Modal Header */}
        <div className="profile-modal-header">
        <h2>{user.role === 'doctor' ? 'Doctor Profile' : 'Patient Profile'}</h2>
          <div className="modal-header-icons">
            {!isEditing && (
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                <Pencil className="w-5 h-5 text-blue-600" />
              </button>
            )}
            <button className="close-button" onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ✅ Modal Content */}
        <div className="profile-modal-content">
          <div className="profile-grid">
            {renderField('Name', 'name')}
            {renderField('Email', 'email')}
            {renderField('Unique ID', 'id')}
            {renderField('Age', 'age')}
            {renderField('Gender', 'gender')}
            {renderField('Date of Birth', 'dateOfBirth')}
            {renderField('Contact', 'contact')}
            {renderField('Address', 'address')}
            {user.role === 'patient' && renderField('Blood Group', 'bloodGroup')}
          </div>
        </div>

        {/* ✅ Modal Footer - Show buttons only when editing */}
        {isEditing && (
          <div className="profile-modal-footer">
            <button className="profile-save-btn" onClick={handleSave}>Save Changes</button>
            <button className="profile-cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
