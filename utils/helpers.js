module.exports = {
    // change date to M/DD/YYYY format
      format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
      // url link formated with replace and split methods
      format_url: url => {
          return url
              .replace('http://', '')
      },
      format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
      },
      // comment is changed to plural if there is more than one comment
      format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
      }
    };