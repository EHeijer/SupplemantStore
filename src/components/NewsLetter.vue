<template>
  <div class="news-container">
    <div class="text"> 
        <div class="upper-text">
            <span>NYHETSBREV</span>
            <h4>Få ny information först!</h4>
        </div>
        <div class="lower-text">
            <p>Prenumerera på nyhetsbrev för att inte missa kampanjer och nyheter</p>
        </div> 
    </div>
      <div class="input-mail"><input type="text" placeholder="Din e-postadress"></div>
      <div class="btn"><button class="click-button">Prenumerera</button></div>
  </div>
</template>
<script>

export default {
  
}
</script>

<style lang="scss">
    .news-container {
        background: #9b9a9a;
        height: 250px;
        display: grid;
        grid-template-columns: 40% 30% 30%;
        align-items: center;
        .text {
            color: #fff;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            margin-bottom: 4rem;
            .upper-text {
                display: grid;
                width: 70%;
                margin-bottom: 3rem;
                
                margin:1.5rem auto;
                span{
                    background: #e10000;
                    padding: 0.5rem 1rem;
                    width: 150px;
                    font-weight: bold;
                    
                }
                h4 {
                    font-size: 20px;
                    padding-top: .4rem;
                    text-align: left;
                }
            }
            .lower-text {
                width: 70%;
                margin: auto;
                text-align: left;
            }
        }
        .input-mail {
            input {
               width: 90%; 
               padding: 0.8rem;
               font-size: 18px;
               color: lightgray;
            }
        }
        .btn {
            button {
                border-style: none;
                font-size: 16px;
                border-radius: 0;
            }
        }
    }
</style>
