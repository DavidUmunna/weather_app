const awaitcall = async () => {
    try {
        let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={085aa222327ab7c9a1f2e9954819de04}');
        
        // Check if the response is html
        const contentType = response.headers.get('content-type');
        console.log(contentType)
        if (contentType && contentType.includes('application/json')) {
            let data = await response.json();
            console.log(data);
        } else {
            console.error('Error: Expected JSON response');
        }
    } catch (error) {
        console.error('Error fetching items:', error);//error handling handled gracefully
    }
}

awaitcall();