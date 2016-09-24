module.exports = {
  blocks: {
    dd: {
      process: (block) => {
        try {
          if (block.body.indexOf("::") != -1) {
            let str = "";
            let lines = block.body.split('\n');
            for (let line of lines) {
              if (!line) {
                continue;
              }
              let [title, description] = line.split('::');
              str += `
              <dl>
                <dt>${title.trim()}</dt>
                <dd>${description.trim()}</dd>
              </dl>        
              `;
            }
            return str;
          } else {
            return `ERROR NO :: DETECTED IN - ${block.body}`
          }

        }
        catch (err) {
          throw err;
          //return `ERROR: ${err}`
        }
      }

    }
  }
};