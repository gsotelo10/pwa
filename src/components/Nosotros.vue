<template>
    <div id="Nosotros" class="about">
        <span class="title">
            <strong>Nosotros</strong>
        </span>
        <div class="grid-container">
            <div grid-item>
              
            </div>
        </div>
    </div>
</template>
<style>
    #Nosotros {
      width: 100%;
      margin-top: 60px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      justify-content: center;

    }
    .grid-container{
        display: grid;
        grid-template-columns: auto auto auto;
        border-radius: 15px;
        justify-content: center;
        margin-top: 10px;
        padding: 10px;
        max-height: auto;
    }

    .grid-container p {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        text-align: center;
        line-height: 25pt;
        text-align: justify;
    }

    .title {
        float: left;
        text-align: left;
        width: 100%;
    }
    @media only screen and (min-width: 950px) {
        #Nosotros {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 150px;
            text-align: center;
        }
        .title {
            margin-top: none;
            color: #1f354c;
            font-size: 35px;
            padding: 10px;
        }
        .grid-container{
            margin-top: 70px;
        }
    }
</style>

