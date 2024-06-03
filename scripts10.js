$(document).ready(function() {
    const $dogList = $('#dog-list');
    const $modal = $('#dog-modal');
    const $modalDogImage = $('#modal-dog-image');
    const $modalDogTitle = $('#modal-dog-title');
    const $modalDogSex = $('#modal-dog-sex');
    const $modalDogAge = $('#modal-dog-age');
    const $modalDogDescription = $('#modal-dog-description');
    const $closeButton = $('#close-button');

    $.get('https://usersdogs.dmytrominochkin.cloud/dogs', function(dogs) {
        dogs.forEach(dog => {
            const $dogCard = $(`
                <div class="dog-card">
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
                    <h3>${dog.title}</h3>
                    <p>${dog.sex}</p>
                </div>
            `);
            $dogCard.on('click', function() {
                openModal(dog);
            });
            $dogList.append($dogCard);
        });
    });

    function openModal(dog) {
        $modal.show();
        $modalDogImage.attr('src', `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`);
        $modalDogTitle.text(dog.title);
        $modalDogSex.text(`Sex: ${dog.sex}`);
        $modalDogAge.text(`Age: ${dog.age}`);
        $modalDogDescription.text(dog.description);
    }

    $closeButton.on('click', function() {
        $modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is($modal)) {
            $modal.hide();
        }
    });
});
