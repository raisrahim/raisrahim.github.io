const siteSidebar = document.querySelector(".site-sidebar");

if (siteSidebar && "ResizeObserver" in window) {
  const updateSidebarHeight = () => {
    document.documentElement.style.setProperty(
      "--mobile-sidebar-height",
      `${siteSidebar.getBoundingClientRect().height}px`,
    );
  };

  updateSidebarHeight();
  new ResizeObserver(updateSidebarHeight).observe(siteSidebar);
}
