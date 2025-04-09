


const createCard = function (activityID, activityTitle, timeframeCurrent, timeframePrevious, timeframeID) {





    return (

        `
    <div class="timeframe-card ${activityID}" id="${activityID}">
        <img id="activity-icon" src="assets/media/icons/icon-${activityID}.svg" alt="">
        <div class="content">

          <div class="content-title">
            <span id="title">${activityTitle}</span>
            <span class="more"></span>
          </div>
          
          <div class="content-timeframe">
              <p id="current">
                ${timeframeCurrent}hrs
              </p>
              <p id="previous">
                ${timeframeID} - ${timeframePrevious}hrs
              </p>
          </div>

        </div>

    </div>
`


    );

};












/*




`
    <div class="timeframe-card COLORING" id="${activityID}">
        <img id="activity-icon" src="assets/media/icons/icon-${activityID}.svg" alt="">
        <div class="content">

          <div class="content-title">
            <span id="title">${activityTitle}</span>
            <span class="more"></span>
          </div>
          
          <div class="content-timeframe">
              <p id="current">
                ${timeframeCurrent}hrs
              </p>
              <p id="previous">
                ${timeframeID} - ${timeframePrevious}hrs
              </p>
          </div>

        </div>

    </div>
`




*/