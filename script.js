// Fetch data from Twitch API for the streamer 'iselyt'
fetch('https://twitch-proxy.freecodecamp.rocks/helix/streams?user_login=iselyt')
    .then(response => response.json())
    .then(streamData => {
        var streaming = streamData.data && streamData.data.length > 0;
        var streamerStatus = document.getElementById('streamer-status');
        if(streaming) {
            // Show the avocado picture and confetti
            document.getElementById('avocado').style.display = 'block';
            confetti.start();
            streamerStatus.textContent = 'iselyt is currently LIVE!';
        } else {
            // Hide the avocado picture and stop the confetti
            document.getElementById('avocado').style.display = 'none';
            confetti.stop();
            streamerStatus.textContent = 'iselyt is currently OFFLINE.';
        }
    });
