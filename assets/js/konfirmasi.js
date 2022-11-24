function hapusMenu(url) {   
    Swal.fire({
        title: 'Are you sure',
            text: "yakin ingin hapus menu?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'

    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}
function hapusRole(url) {
    Swal.fire({
        title: 'Are you sure',
            text: "yakin ingin hapus Role?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'

    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}
function hapusSubmenu(url) {
    Swal.fire({
        title: 'Are you sure',
            text: "yakin ingin hapus submenu?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'

    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}