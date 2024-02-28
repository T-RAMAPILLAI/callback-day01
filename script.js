var h1=document.createElement("h1")
document.body.append(h1)

setTimeout(function(){
    document.querySelector('h1').innerText=`counter:${10}`;
    setTimeout(function f1(){
        document.querySelector('h1').innerText=`counter:${9}`;
        setTimeout(function(){
            document.querySelector('h1').innerText=`counter:${8}`;
            setTimeout(function(){
                document.querySelector('h1').innerText=`counter:${7}`;
                setTimeout(function(){
                    document.querySelector('h1').innerText=`counter:${6}`;
                    setTimeout(function(){
                        document.querySelector('h1').innerText=`counter:${5}`;
                        setTimeout(function(){
                            document.querySelector('h1').innerText=`counter:${4}`;
                            setTimeout(function(){
                                document.querySelector('h1').innerText=`counter:${3}`;
                                setTimeout(function(){
                                    document.querySelector('h1').innerText=`counter:${2}`;
                                    setTimeout(function(){
                                        document.querySelector('h1').innerText=`counter:${1}`;
                                        setTimeout(function(){
                                            document.querySelector('h1').innerText="Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

