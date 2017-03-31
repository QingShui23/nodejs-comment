module.exports = {
  convertTimestamp2Date: ( timestring ) => {
    try {
      let d = new Date( timestring ); 
      return d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    } catch(e) {}
  },
  handleVueData: ( data ) => {
  	return JSON.parse( JSON.stringify(data) );
  }
};