// Tab Panels
$(document).ready(function () {
	// grab all container panel DIVs
	var tabContainers = $("div.tabs > div");
	// hide them all, then show the first one
	tabContainers.hide().filter(":first").show();
	// set the first tab to class="selected"
	$("div.tabs ul.tabNavigation a:first").addClass("selected");
	// add onclick handlers to all tabs
	$("div.tabs ul.tabNavigation a").click(function () {
	// hide all tabContainers
	tabContainers.hide();
	// show only the tabContainer with the ID that matches the href for the A that was clicked
	//alert(this.hash);
	tabContainers.filter(this.hash).show();
	// remove class="selected" from all tabs
	$("div.tabs ul.tabNavigation a").removeClass("selected");
	// set class="selected" on the tab that was just clicked
	$(this).addClass("selected");
	// stop following links
	return false;
	});
});

// JavaScript to handle tab clicks and animate the background color
const tabNavigation = document.querySelector('.tabNavigation');
const tabs = tabNavigation.querySelectorAll('a');
const page = document.querySelector('#page');
let currentTabIndex = 0;

function changeTab(event) {
	event.preventDefault();
	const clickedTabIndex = Array.from(tabs).indexOf(event.target);
	if (clickedTabIndex !== currentTabIndex) {
		page.classList.remove(getColorClass(currentTabIndex));
		page.classList.add(getColorClass(clickedTabIndex));
		currentTabIndex = clickedTabIndex;
	}
}

function getColorClass(index) {
	switch (index) {
		case 0: return 'lightsalmon';
		case 1: return 'lightgreen';
		case 2: return 'purple';
		case 3: return 'lightseagreen';
	}
}

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', changeTab);
}