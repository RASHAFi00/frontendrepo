



const activityContainer = document.querySelector("#activity-container");
const toggleButtons = Array.from(document.querySelector("#toggle-buttons").children);

var timeframes = [];
var cardStruct = [];


const dataJson = fetch("data-dir/data.json");

dataJson
    .then((Response) => Response.json())
    .then((responseData) => {

        responseData.forEach(cardData => {

            timeframes.push(
                {
                    cardID: cardData.ID,
                    tf: cardData.timeframes
                }
            );

            cardStruct.push(
                createCard(cardData.ID, cardData.title, cardData.timeframes.weekly.current, cardData.timeframes.weekly.previous, cardData.timeframes.weekly.tfID)
            );
        });


        cardStruct.forEach(activity => {
            activityContainer.innerHTML += activity;
        });

        const activityCards = Array.from(activityContainer.children);

        console.log(activityCards);

        function editTimeframe(AC, TFID) {

            timeframes.forEach(tf => {
                if (AC.id == tf.cardID) {

                    AC.querySelector("#current").classList.remove("appear");
                    AC.querySelector("#previous").classList.remove("appear");

                    AC.querySelector("#current").classList.add("fade");
                    AC.querySelector("#previous").classList.add("fade");

                    setTimeout(() => {
                        AC.querySelector("#current").innerHTML = tf.tf[`${TFID}`].current + "hrs";
                        AC.querySelector("#previous").innerHTML = tf.tf[`${TFID}`].tfID + " - " + tf.tf[`${TFID}`].previous + "hrs";

                        AC.querySelector("#current").classList.remove("fade");
                        AC.querySelector("#previous").classList.remove("fade");

                        AC.querySelector("#current").classList.add("appear");
                        AC.querySelector("#previous").classList.add("appear");
                    }, 505);


                }
            });
        };

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                toggleButtons.forEach(btn => { btn.classList.remove("active-btn") });
                button.classList.add("active-btn");

                activityCards.forEach(AC => { editTimeframe(AC, button.id) });

            }
            );
        });

    });

