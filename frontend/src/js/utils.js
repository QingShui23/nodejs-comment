module.exports = {
  convertTimestamp2Date: function( timestring ){
    try {
      let d = new Date( timestring ); 
      return d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    } catch(e) {}
  },
};