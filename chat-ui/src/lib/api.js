export async function getAllAgents() {
    try {
        const response = await fetch(import.meta.env.VITE_CHATBOT_SERVER_URL + '/agents', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const data = await response.json();
        return {agents: data.agents};
    } catch (error) {
        return {error: error};
    }
}

export async function sendMessage(agentId, message, selectedFile = null) {
    const formData = new FormData();
    formData.append("text", message);
    formData.append("user", "user");

    if (selectedFile) {
        formData.append("file", selectedFile);
    }

    try {
        const response = await fetch(import.meta.env.VITE_CHATBOT_SERVER_URL + `/${agentId}/message`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        });
        const data = await response.json();
        return {data: data};
    } catch (error) {
        console.error("Error sending message:", error);
        return {error: error};
    }
}
