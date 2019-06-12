const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <html>
  <body>
    <div style="text-align: center">
      <h3>Please submit input!</h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/like">Like</a>
        <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/dislike">Dislike</a>
      </div>
    </div>
  </body>
</html>
  `;
};
