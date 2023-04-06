let loadingEl = document.createElement("div");
document.body.prepend(loadingEl);
loadingEl.classList.add("page-loader");
loadingEl.classList.add("flex-column");
loadingEl.classList.add("bg-dark");
loadingEl.classList.add("bg-opacity-25");
loadingEl.innerHTML = `
        <span class="spinner-border text-primary" role="status"></span>
        <span class="text-gray-800 fs-6 fw-semibold mt-5">Working...</span>
    `;

// Show page loading
function showPageLoader() {
    KTApp.showPageLoading();
}


function hidePageLoader() {
    KTApp.hidePageLoading();
}

$("form").submit(function (event) {
    showPageLoader();       // Hide after 3 seconds
    setTimeout(function () {
        hidePageLoader();
    }, 10000);
});


function cancelSubscription() {
    Swal.fire({
        html: `<div class="mb-7">Cancel subscription ?</div>`,
        icon: "question",
        reverseButtons: true,
        focusCancel: true,
        showCancelButton: true,
        focusConfirm: false,
        buttonsStyling: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No, return",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then(function (result) {
        if (result.isConfirmed) {
            $('#top-cancel-subscription').submit();
        }
    });
}


const button = document.getElementById('kt_docs_sweetalert_html');

button.addEventListener('click', e => {
    e.preventDefault();

    Swal.fire({
        html: `<p class="text-start text-gray-500">Credit is a virtual currency or token system used on our platform to create content. It is earned or purchased by users and can be used to generate text, idea or video content.</p>

                    <p class="text-start">1 credit for each word, each idea costs 1500 credits, and each 1 minute video costs 500 credits . This system regulates the amount of content being created and compensates users for their contributions.</p>`,
        title: `<h3 class="text-start">Credits</h3>`,
        buttonsStyling: false,
        width: '400px',
        padding: '10px',
        reverseButtons: true,
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "Check Spend History",
        cancelButtonText: 'Cancel',
        customClass: {
            cancelButton: 'btn btn-bg-white btn-color-primary',
            confirmButton: "btn btn-bg-white btn-color-primary"
        }
    }).then(function (result) {
        if (result.isConfirmed) {
            window.location = '/credit-history';
        }
    });
});