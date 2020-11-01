const container = document.querySelector('.container')
const text = document.querySelector('#text')

const fullTime = 24.50000
const beginTime = 0.5000
const startTime = 3000
const restTime = 20000
const moveTime = 30000

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Begin ! 🔥'

        setTimeout(() => {
        text.innerText = 'Jumping Jacks'

            setTimeout(() => {
                text.innerHTML = 'Take A Rest !'

                setTimeout(() => {
                    text.innerHTML = 'Push Ups'

                    setTimeout(() => {
                        text.innerText = 'Rest Up More To Come !'
                
                        setTimeout(() => {
                            text.innerText = 'Tricep Dips !'
                
                            setTimeout(() => {
                                text.innerHTML = 'Takee A Rest !'
                
                                setTimeout(() => {
                                    text.innerHTML = 'Shake Off'
                    
                                    setTimeout(() => {
                                        text.innerText = 'Jog On Spot'
                            
                                        setTimeout(() => {
                                            text.innerHTML = 'Rest Your Muscles !'
                            
                                            setTimeout(() => {
                                                text.innerHTML = 'Completed ! 🔥'

                                            }, beginTime)
                            
                                        }, restTime)
                            
                                    }, moveTime)
                
                                }, restTime)
                
                            }, moveTime)
                
                        }, restTime)
                
                    }, moveTime)

                }, restTime)

            }, moveTime)
        }, startTime)
}
