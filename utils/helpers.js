module.exports = {
    // change date to M/DD/YYYY format
      format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
      
      // format_review: review => {
      //     return review
      //         .replace('http://', '')
      // },
      // format_review: review => {
      //   return review
      //     .replace('http://', '')
      //     .replace('https://', '')
      //     .replace('www.', '')
      //     .split('/')[0]
      //     .split('?')[0];
      // },
      
      format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
      }
    };
    