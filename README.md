Widget that generates sharing buttons for facebook, twitter and google plus.

Usage:
```php
	$this->widget('path.to.SocialShareWidget', array(
		'url' => 'http://example.org',					//required
		'services' => array('google', 'twitter'),		//optional
		'htmlOptions' => array('class' => 'someClass'),	//optional
		'popup' => false,								//optional
	));
```
