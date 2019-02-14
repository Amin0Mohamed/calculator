 function onShow(s){
               if( mycal.display.value==0){
                    mycal.display.value="";
                   mycal.display.value +=s;
               }
               else if(mycal.value.value.length > 0){
                    mycal.display.value="";
                   mycal.value.value="";
                    mycal.display.value +=s;
               }
               else{
                   mycal.display.value +=s;
               }
              
           }
           function onEqual(){
               mycal.value.value=eval(mycal.display.value);
               //mycal.display.value="";
           }
            function onSquar(){
               var ss = Math.pow(mycal.display.value , 2);
                 mycal.value.value=ss;
               
           }
            function onSquart(){
                var ss = Math.pow(mycal.display.value , 1/2);
                 mycal.value.value=ss;
               
           }
            function onSin(){
                var ss = Math.sin(mycal.display.value);
                 mycal.value.value=ss;
           }
            function onCos(){
                var ss = Math.cos(mycal.display.value);
                 mycal.value.value=ss;
           }
            function onTan(){
               var ss = Math.tan(mycal.display.value);
                 mycal.value.value=ss;
           }
            function del(){
               
                if(mycal.display.value.length > 0){
                      var text = mycal.display.value;
                      mycal.display.value = text.substr(0,text.length-1);
                }else{
                        mycal.value.value=""; 
                }
              
               
           }
            function ac(){
                mycal.display.value=0;
                 mycal.value.value="";
           }
           function ans(){
               var anser = mycal.value.value;
               mycal.display.value=anser;
               mycal.value.value="";
           }