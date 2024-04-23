

resume ={
    basics: {
      name: "A.Ashok Govindharasu",
      email: "ashokgovintharasu@gmail.com",
      DOB:"01.01.2000",
      phone: "1234567890",
    
      address: {  
            Doorno:"2/56",   
            street:"veerankadu",
            post:"poosaripatty",     
            city: "Salem",
            state:"tamil nadu",
            postalCode:"636 301"}
    },
    education: {
        SSLC:{
            institution :"Government hr sec school",
            board:"state Board",
            percentage: "77.2",
            yearOfPassing:"2015"
        },
        HSC:{
            institution :"Government hr sec school",
            board:"state Board",
            percentage: "87.02",
            yearOfPassing:"2017"
        },
        BE:{
            institution :"Engineering college",
            university:"Anna university",
            CGPA: "7.53",
            yearOfPassing:"2021"
        }
  
    },
    skills: {
      name: "Full stack Development",
      level: "Master ",
    },
    otherSkills :["Linux user","OS Installation","Typewriter English (Junior Grade)","Diploma in computer applications","MS office"],
    personalSkills:["Time Management"," SelfMotivator","Adaptability"],
    language: ["English(R/W/S)","Tamil(R/W/S)"],
    hobby : ["Listening to music", "Travelling, Gardening","Programing"],
    declaration:[`I hereby declare that all the above mentioned information given by me is true and correct to the best of my knowledge and belief.`]
    }
  
  
     
  Object.keys(resume).forEach(key => {
    console.log(key+":")
    Object.keys(resume[key]).forEach(key1=>{

        if ((Object.keys(resume[key][key1]).length)<=6){ 
            console.log(key1+":")
          Object.keys(resume[key][key1]).forEach(key2=>{ {
              console.log(key2,":",resume[key][key1][key2])
          }
            })
    }else{
      console.log(key1,":",resume[key][key1])
        }
    })
  })
  