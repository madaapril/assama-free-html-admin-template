$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

flatpickr.localize({
  rangeSeparator: " ~ ",
});

function showLoading(text = "Loading...") {
  $("#loading-text").text(text);
  $("#loading-overlay").removeClass("d-none");
}

function hideLoading() {
  $("#loading-overlay").addClass("d-none");
}

$(document).ready(function () {
  // Sidebar Toggle Logic
  function toggleSidebar() {
    $("body").toggleClass("sidebar-toggled");
    $("#admin-sidebar").toggleClass("toggled");
  }

  $(document).on(
    "click",
    "#sidebarToggle, #sidebarClose, #sidebar-overlay",
    function () {
      toggleSidebar();
    },
  );

  // Reset sidebar state on window resize (prevent side effects)
  let lastWidth = $(window).width();
  $(window).resize(function () {
    const currentWidth = $(window).width();
    if (
      (lastWidth <= 991.98 && currentWidth > 991.98) ||
      (lastWidth > 991.98 && currentWidth <= 991.98)
    ) {
      $("body").removeClass("sidebar-toggled");
      $("#admin-sidebar").removeClass("toggled");
    }
    lastWidth = currentWidth;
  });

  // Select2 Focus
  $(document).on("select2:open", () => {
    const searchField = document.querySelector(".select2-search__field");
    if (searchField) searchField.focus();
  });

  // Initialize Bootstrap Tooltips
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
  );

  // Smooth fade in for main content
  $("main").css("opacity", "0").animate(
    {
      opacity: 1,
    },
    500,
  );

  $("form:not(.no-loading)").on("submit", function () {
    let $form = $(this);

    // cari semua tombol submit di dalam form ini
    let $btn = $form.find('button[type="submit"], input[type="submit"]');

    // disable tombol
    $btn.prop("disabled", true);

    // simpan text asli (biar bisa dikembalikan kalau perlu)
    $btn.each(function () {
      let $this = $(this);
      $this.data("original-text", $this.html());

      // ganti isi tombol (untuk button)
      if ($this.is("button")) {
        $this.html(`
                        <div class="d-flex align-items-center justify-content-center gap-2 w-100">
                            <div class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span>Loading...</span>
                        </div>
                    `);
      }

      // untuk input type submit
      if ($this.is("input")) {
        $this.val("Loading...");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Ganti Icon Next Previous Datatable jadi icon
  $.extend(true, $.fn.dataTable.defaults, {
    ordering: false,
    scrollX: true,
    responsive: false,
    language: {
      paginate: {
        next: '<i class="ri-arrow-right-s-line"></i>',
        previous: '<i class="ri-arrow-left-s-line"></i>',
      },
    },
  });
});
