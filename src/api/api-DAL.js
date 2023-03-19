//DAL - data access layer

import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "020eede9-536a-43e1-ba0a-ab142c34e29e"
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data);
    },
    getFollow(id) {
        return instance.post(`follow/${id}`)
          .then(response => response.data);
    },
    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
          .then(response => response.data);
    },
  /*  getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    },*/

};

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

export const profileAPI = {
    getProfile(userId) {
       return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },

};


/*
 export const getUsers = (currentPage , pageSize ) => {
 return instance.get(`users?page=${ currentPage }&count=${ pageSize }`, {
 withCredentials: true
 })
 .then(response => response.data)
 }*/
