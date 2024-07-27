import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error al obtener información del perfil:', error);
        }
    };

    return (
        <div className="background-image">
            <div className="profile-page-container">
                <h2>Información del perfil</h2>
                <p>Nombre: {profileInfo.name}</p>
                <p>Email: {profileInfo.email}</p>
                <p>Ciudad: {profileInfo.city}</p>
                {profileInfo.role === "ADMIN" && (
                    <>
                        
                            <Link to={`/update-user/${profileInfo.id}`} className='btn btn-primary'>
                                    Actualizar este perfil 
                            </Link>
                        
                        
                            <Link to="/admin/user-management" className='btn btn-danger'>Apartado administrador</Link>
                    
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
