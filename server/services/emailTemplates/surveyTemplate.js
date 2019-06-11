const keys = require('../../config/keys');

module.exports = ({ body }) => {
  return `
  <html>
  <body>
    <div style="text-align: center">
      <h3>Please submit input!</h3>
      <p>Please answer the following question:</p>
      <p>${body}</p>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">Like</a>
        <a href="${keys.redirectDomain}/api/surveys/thanks">Dislike</a>
      </div>
    </div>
  </body>
</html>
  `;
};