const baseUrl = 'https://6421ab3d34d6cd4ebd79207a.mockapi.io/api/';
const userApi = 'user/';

export async function getAllUser() {
    try {
        const res = await fetch(baseUrl + userApi, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function createUser(user) {
    try {
        const res = await fetch(baseUrl + userApi, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function searchByUserId(id) {
    try {
        const res = await fetch(baseUrl + userApi + id, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function updateUser(id, content) {
    try {
        const res = await fetch(baseUrl + userApi + id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(content)
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function deleteUserById(id) {
    try {
        const res = await fetch(baseUrl + userApi + id, {
            method: 'DELETE',
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function filterUser(filter) {
    let urlFilter = new URL(baseUrl + userApi);
    for (const key in filter) {
        const element = filter[key];
        urlFilter.searchParams.append(key, element);
    }

    try {
        const res = await fetch(urlFilter, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

export async function paginationStory(pagination) {
    let urlFilter = new URL(baseUrl + userApi);
    for (const key in pagination) {
        const element = pagination[key];
        urlFilter.searchParams.append(key, element);
    }

    try {
        const res = await fetch(urlFilter, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}