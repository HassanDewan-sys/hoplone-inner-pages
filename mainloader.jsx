import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const MainLoadingScreen = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        var counter = 0;
        var count = 0;
        var i = setInterval(function() {
            $(".loadingscreen .loadingscreen-counter h1").html(count + "%");
            $(".loadingscreen").css("width", count + "%");

            counter++;
            count++;
            if (counter === 101) {
                clearInterval(i);
                setLoadingComplete(true); // Set loading complete to true
            }
        }, 50);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(i);
        };
    }, []);

    useEffect(() => {
        if (loadingComplete) {
            $('html').css('overflow', 'auto');
        }
    }, [loadingComplete]);

    if (loadingComplete) {
        return null; // Return null to hide the loading screen
    }

    return (
        <div className="loadingscreen">
            <div className="loadingscreen-counter">
                <img src="img/loading-logo.gif" className='img-fluid' />
                <h1>0%</h1>
            </div>
        </div>
    );
}

export default MainLoadingScreen;