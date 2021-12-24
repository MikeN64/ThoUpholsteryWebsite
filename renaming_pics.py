import os


def rename_pics():
	cwd = os.getcwd()
	path = f'{cwd}/pics'
	
	# Reset the naming of pics to prevent deleting images accidently
	pics = os.listdir(path)
	print('Number of pictures to be named', len(pics))
	for index, pic in enumerate(pics):
		name = f'image_{index}'
		os.rename(os.path.join(path, pic), os.path.join(path, name))

	# Renaming pics here
	pics = os.listdir(path)
	for index, pic in enumerate(pics):
		name = f'image_{index}.jpg'
		os.rename(os.path.join(path, pic), os.path.join(path, name))

	print('Number of pictures now', len(pics))


if __name__ == '__main__':
	rename_pics()
