const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
	userId: String, 
	displayName: String,
    skills: String, 
    socialLinks: String, 
    description: String,
    dateOfBirth: String, 
    avatar: String, 
    coverPhoto: String, 
    gender: String,
    phoneNumber: String, 
    preferredLanguage: String,
    country: String,
    city: String,
    state: String,
    userType: String,
    createdAt: String,
    updatedAt: String,
});

module.exports = mongoose.model('UserProfile', userProfileSchema);