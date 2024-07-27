import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';
import { AdminSectionButton, ButtonContainer, ProfilePageContainer, UpdateProfileButton } from '../../StylesId/ProfilePageStyles';

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
             <ProfilePageContainer>
            <h2>Información del perfil</h2>
            <p>Nombre: {profileInfo.name}</p>
            <p>Email: {profileInfo.email}</p>
            <p>Ciudad: {profileInfo.city}</p>
            {profileInfo.role === "ADMIN" && (
                <ButtonContainer>
                    <Link className='btn btn-primary' to={`/update-user/${profileInfo.id}`} component={UpdateProfileButton}>
                        Actualizar este perfil
                    </Link>
                    <Link className='btn btn-danger' to="/admin/user-management" component={AdminSectionButton}>
                        Apartado administrador
                    </Link>
                </ButtonContainer>
            )}
        </ProfilePageContainer>
        </div>
    );
}

export default ProfilePage;
