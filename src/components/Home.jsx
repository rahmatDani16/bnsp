import {  Layout } from 'react-feather';
import { FaChartLine, FaWallet, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <Layout>
             <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <FaChartLine className="card-icon" />
                    <h3>Analytics</h3>
                    <p>Overview of the  performance</p>
                    <span className="card-value">1200</span>
                </div>
                <div className="dashboard-card">
                    <FaWallet className="card-icon" />
                    <h3>Transactions</h3>
                    <p>Total Transactions</p>
                    <span className="card-value">$4,500</span>
                </div>
                <div className="dashboard-card">
                    <FaUsers className="card-icon" />
                    <h3>Users</h3>
                    <p>Total Users</p>
                    <span className="card-value">800</span>
                </div>
            </div>
            <div className="dashboard-summary">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    <div className="activity-item">
                        <span className="activity-time">10 minutes ago</span>
                        <span className="activity-description">New user signed up</span>
                    </div>
                    <div className="activity-item">
                        <span className="activity-time">1 hour ago</span>
                        <span className="activity-description">Transaction #1032 completed</span>
                    </div>
                    <div className="activity-item">
                        <span className="activity-time">2 hours ago</span>
                        <span className="activity-description">System maintenance completed</span>
                    </div>
                </div>
            </div>
            <style>
                {`
                .dashboard-container {
                    background-color: #1f1f1f;
                    color: white;
                    padding: 20px;
                    height: 100vh;
                    overflow-y: auto;
                }

                .dashboard-title {
                    text-align: center;
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #f39c12;
                    margin-bottom: 40px;
                }

                .dashboard-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .dashboard-card {
                    background-color: #2c3e50;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                }

                .dashboard-card:hover {
                    transform: translateY(-5px);
                }

                .card-icon {
                    font-size: 3rem;
                    color: #f39c12;
                    margin-bottom: 15px;
                }

                .dashboard-card h3 {
                    font-size: 1.8rem;
                    margin-bottom: 10px;
                }

                .card-value {
                    font-size: 2rem;
                    font-weight: bold;
                }

                .dashboard-summary {
                    background-color: #2c3e50;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .dashboard-summary h3 {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                }

                .activity-list {
                    list-style: none;
                    padding: 0;
                }

                .activity-item {
                    background-color: #34495e;
                    padding: 15px;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .activity-time {
                    font-size: 0.9rem;
                    color: #bdc3c7;
                }

                .activity-description {
                    font-size: 1.1rem;
                    margin-top: 5px;
                }
                `}
            </style>
        </div>
        </Layout>
       
    );
};

export default Dashboard;
