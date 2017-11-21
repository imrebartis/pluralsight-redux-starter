  //transforming the data from the API into
  // the format required for the dropdown
  // (see SelectInput.js' return)

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });
  }