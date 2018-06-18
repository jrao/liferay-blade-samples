import isArray from 'isarray';

export default function(params) {
    var out = document.getElementById(params.portletElementId);
    
    var t;

	out.innerHTML += 'Calling isArray([])';
	t = isArray([]);
	out.innerHTML += ' -> returns ' + t + '.<br/>';

	out.innerHTML += 'Calling isArray([])';
	t = isArray([]);
	out.innerHTML += ' -> returns ' + t + '.<br/>';
}