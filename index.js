function copiarTexto() {
    let copiar = document.getElementById('copiar')
    copiar.select()
    copiar.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert(" O pix foi copiado")
}