function changeSelection(parkKey){
	document.getElementById("viz").src="images/"+parkKey+".png";
	document.getElementById("description").innerHTML = getContent(parkKey);
}
function getContent(parkKey){
	switch(parkKey) {
		case 'CommunityP':
			return "CommunityP";	
		break;

		case 'RegionalP':
			return "RegionalP";	
		break;

		case 'CitywideP':
			return "CitywideP";	
		break;

		case 'UnimprovedP':
			return "UnimprovedP";	
		break;

		case 'MagnetP':
			return "MagnetP";	
		break;

		case 'PassiveP':
			return "PassiveP";	
		break;

		case 'MiniP':
			return "MiniP";	
		break;

		case 'NeighborhoodP':
			return "NeighborhoodP";	
		break;

		case 'ParkwayP':
			return "ParkwayP";	
		break;

		case 'LinearP':
			return "LinearP";	
		break;

		case 'NaturePreserveP':
			return "NaturePreserveP";	
		break;

		case 'ParkwaysP':
			return "ParkwaysP";	
		break;

		case 'AllP':
			return "AllP";	
		break;
		case 'Zoo':
			return "Zoo";	
		break;
		case 'Wheelchair':
			return "Wheelchair";	
		break;
		case 'Golfcourse':
			return "Golfcourse";	
		break;

		default:

	}
}