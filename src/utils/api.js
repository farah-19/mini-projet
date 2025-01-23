import axios from 'axios';

const API_BASE_URL = 'https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire';

// Users API (inchangée)
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Request API

/**
 * Récupère toutes les demandes d'un utilisateur spécifique.
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise<Array>} Liste des demandes de l'utilisateur.
 */
export const fetchUserRequests = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${userId}/requests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user requests:', error);
    throw error;
  }
};

export const createRequest = async (requestData) => {
  try {
    const response = await axios.post(API_BASE_URL, {
      name: requestData.name, // Si un champ 'name' est requis
      titre: requestData.titre,
      description: requestData.description,
      statut: 'En attente', // Statut par défaut
      utilisateurId: requestData.utilisateurId,
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la demande :', error.response?.data || error.message);
    throw error;
  }
};

export const cancelRequest = async (userId, requestId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${userId}/${requestId}`);
  } catch (error) {
    console.error('Error canceling request:', error);
    throw error;
  }
};

export const updateRequestStatus = async (userId, requestId, status) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${userId}/requests/${requestId}`,
      { status }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating request status:', error);
    throw error;
  }
};

/**
 * Récupère toutes les demandes pour l'administrateur (toutes les demandes indépendamment de l'utilisateur).
 * @returns {Promise<Array>} Liste de toutes les demandes.
 */
export const fetchAllRequests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/requests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all requests:', error);
    throw error;
  }
};

/**
 * Supprime un utilisateur par son ID.
 * @param {string} id - L'ID de l'utilisateur.
 * @returns {Promise<void>}
 */
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// utils/api.js

export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`, {
      method: 'PUT', // Utilise PUT ou PATCH selon l'API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};
