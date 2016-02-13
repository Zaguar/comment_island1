function commentIsland() {
	var userName = document.getElementById('userName').value
	var userDisplay = document.createTextNode('posted by' + ' ' + userName)
	var userComment = document.getElementById('userComment').value
	var commentDisplay = document.createTextNode(userComment)
	// var imgArray = ['images/island1.jpg', 'images/island2.jpg', 'images/island3.jpg', 'images/island4.jpg', 'images/island5.jpg']

	var newListItem = document.createElement('li')
	newListItem.className = "list-user-group"
	var newUserName = document.createElement('h2')
	newUserName.appendChild(userDisplay)
	// var newImg = document.createElement('img')
	// newImg.setAttribute('src', imgArray[2])
	var newComment = document.createElement('p')
	newComment.className = "pImage"
	newComment.appendChild(commentDisplay)

	// var newButton = document.createElement('button')
	// newButton.className = "btn btn-danger"
	// newButton.innerHTML = "Remove Comment"

	newListItem.appendChild(newUserName)
	// newListItem.appendChild(newImg)
	newListItem.appendChild(newComment)
	// newListItem.appendChild(newButton)
	document.getElementById('commentSection').appendChild(newListItem)

	// var removeP = document.getElementById('li')
	// var nowRemove = removeP.innerHTML = ''
	// newButton.onClick(nowRemove)
}