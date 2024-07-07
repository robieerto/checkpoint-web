async function goToPage(router: any, page: string) {
  await router.push({ path: page })
  // window.location.href = page
}

function isMobile() {
  return window.innerWidth <= 768
}

export { goToPage }
