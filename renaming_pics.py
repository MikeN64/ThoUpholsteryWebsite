import os


def rename_pics():
	cwd = os.getcwd()
	path = f'{cwd}/pics'

	pics = os.listdir(path)
	for index, pic in enumerate(pics):
		name = f'image_{index}.jpg'
		os.rename(os.path.join(path, pic), os.path.join(path, name))


if __name__ == '__main__':
	rename_pics()
	print('renaming pics...')