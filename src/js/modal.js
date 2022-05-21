
const modalBTNs = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');

const body = document.body;


function openModal(elem) {
    elem.classList.add('_modal_active');
    body.classList.add('_locked')
}


function closeModal(e) {
    if (e.target.classList.contains('_modal__close') || e.target.closest('._modal__close') || e.target.classList.contains('_modal__bg')) {
        e.target.closest('._modal').classList.remove('_modal_active');
        body.classList.remove('_locked')
    }
}

modalBTNs.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;

        modals.forEach(modal => {
            if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
                openModal(modal)
            }
        })
    })
})

modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
    modals.forEach(modal => {
        if (e.key === 'Escape' && modal.classList.contains('_modal_active')) {
            modal.classList.remove('_modal_active');
            body.classList.remove('_locked');
        }
    })
})