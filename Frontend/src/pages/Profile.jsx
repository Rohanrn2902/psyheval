import { useState, useEffect } from 'react';
import { User, Clock, Calendar, Mail, Activity, LogIn, AlertCircle, FileText, Shield } from 'lucide-react';
import './UserProfile.css'; // We'll define this CSS file below

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://lmrg2nb9-3000.inc1.devtunnels.ms/get-users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Format date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading user data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-card">
          <AlertCircle className="error-icon" />
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Use mock data if needed for development or if backend is not available
  const user = userData || {
    uid: 'YO8se9dUHEMTYn7pit9YCsPWelH3',
    createdAt: '2025-04-19T14:15:19.584419',
    lastLogin: '2025-04-19T14:15:19.584421',
    name: 'Om',
    email: 'pawaskarom958@gmail.com',
    quizResults: [
      {
        score: 32,
        quizType: 'anxiety',
        details: {},
        timestamp: '2025-04-19T14:17:24.357156'
      }
    ]
  };

  const getScoreClass = (score) => {
    if (score < 20) return 'score-low';
    if (score < 40) return 'score-medium';
    return 'score-high';
  };

  const getAssessmentClass = (score) => {
    if (score < 20) return 'assessment-low';
    if (score < 40) return 'assessment-medium';
    return 'assessment-high';
  };

  return (
    <div className="page-container">
      <div className="profile-container">
        {/* Main card with shadow and rounded corners */}
        <div className="profile-card">
          {/* Header section */}
          <div className="profile-header">
            <div className="header-content">
              <div className="header-title">
                <div className="header-icon">
                  <User />
                </div>
                <h1>User Profile</h1>
              </div>
              <div className="user-id">
                <Shield className="id-icon" />
                <span>ID: {user.uid.substring(0, 8)}...</span>
              </div>
            </div>
          </div>
          
          {/* User info section */}
          <div className="user-info-section">
            <h2 className="user-name">{user.name}</h2>
            
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon mail-icon">
                  <Mail />
                </div>
                <div className="info-content">
                  <p className="info-label">Email Address</p>
                  <p className="info-value">{user.email}</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon calendar-icon">
                  <Calendar />
                </div>
                <div className="info-content">
                  <p className="info-label">Account Created</p>
                  <p className="info-value">{formatDate(user.createdAt)}</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon login-icon">
                  <LogIn />
                </div>
                <div className="info-content">
                  <p className="info-label">Last Login</p>
                  <p className="info-value">{formatDate(user.lastLogin)}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assessment Results Section */}
          <div className="assessment-section">
            <h2 className="section-title">
              <FileText className="section-icon" />
              Assessment Results
            </h2>
            
            {user.quizResults && user.quizResults.length > 0 ? (
              <div className="results-container">
                {user.quizResults.map((result, index) => (
                  <div key={index} className="result-card">
                    <div className="result-header">
                      <div className="result-title">
                        <Activity className="result-icon" />
                        <h3>{result.quizType} Assessment</h3>
                      </div>
                      <span className="result-date">{formatDate(result.timestamp)}</span>
                    </div>
                    
                    <div className="result-content">
                      <div className="result-details">
                        <div className="score-container">
                          <p className="score-label">Score</p>
                          <div className="score-display">
                            <span className={getScoreClass(result.score)}>
                              {result.score}
                            </span>
                            <span className="score-total">/100</span>
                          </div>
                        </div>
                        
                        <div className="assessment-container">
                          <p className="assessment-label">Assessment</p>
                          <div className={getAssessmentClass(result.score)}>
                            {result.score < 20 ? (
                              <p>Low anxiety levels</p>
                            ) : result.score < 40 ? (
                              <p>Moderate anxiety levels</p>
                            ) : (
                              <p>High anxiety levels - follow-up recommended</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="progress-container">
                        <div className="progress-scale">
                          <span>0</span>
                          <span>50</span>
                          <span>100</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className={`progress-fill ${getScoreClass(result.score)}-bg`}
                            style={{ width: `${result.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <AlertCircle className="no-results-icon" />
                <p>No assessment results available</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer section */}
        <div className="footer">
          <Clock className="footer-icon" />
          <span>Last updated: {new Date().toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}