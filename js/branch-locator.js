function branchLocatorInit() {
	const doc = document;
	const branchLocatorPrimaryNavItem = doc.getElementById('branchLocatorPrimaryNavItem');
	const branchLocatorSecondaryNavItem = doc.getElementById('branchLocatorSecondaryNavItem');
	const primaryMap = doc.getElementById('primaryMap');
	const secondaryMap = doc.getElementById('secondaryMap');

	branchLocatorPrimaryNavItem.addEventListener('click', function() {
		branchLocatorPrimaryNavItem.classList.add('active');
		branchLocatorSecondaryNavItem.classList.remove('active');
		primaryMap.style.display = 'block';
		secondaryMap.style.display = 'none';
	});

	branchLocatorSecondaryNavItem.addEventListener('click', function() {
		branchLocatorPrimaryNavItem.classList.remove('active');
		branchLocatorSecondaryNavItem.classList.add('active');
		primaryMap.style.display = 'none';
		secondaryMap.style.display = 'block';
	});
}

document.addEventListener('DOMContentLoaded', function() {
	branchLocatorInit();
});
