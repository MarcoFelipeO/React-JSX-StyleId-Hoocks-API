// UserManagementStyleId.jsx
import styled from 'styled-components';

export const UserManagementStyleId = styled.div`
  .user-management-container {
    padding: 2rem;
  }

  .table-responsive {
    margin-top: 1rem;
  }

  .table {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }

  .thead-dark {
    background-color: #343a40;
    color: #fff;
  }

  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      background-color: #0056b3;
      border-color: #004085;
    }
  }

  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    &:hover {
      background-color: #c82333;
      border-color: #bd2130;
    }
  }
`;
