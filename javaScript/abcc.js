let capitalizeWords = (FullName) => {
        return FullName.replace( /\b\w/g, (char) => char.toUpperCase() );
      };
      
      let FullName = "kuldeep nagar";
    
      let capital_word = capitalizeWords(FullName);
      console.log(capital_word); 