function autoComplete ( input ) {
  if(!input) return;

  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
  });

  input.on('keydown', (e) => {
    // Prevent default for enter key.
    if(e.keycode === 13) e.preventDefault();
  })
}

export default autoComplete;