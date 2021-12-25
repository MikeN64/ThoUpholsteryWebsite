import filecmp
import os


def get_dupelicated_files():
    dupes = set()

    cwd = os.getcwd()
    path = f'{cwd}/pics'

    pics = os.listdir(path)
    for pic1 in pics:
        file_path1 = f'{path}/{pic1}'
        for pic2 in pics:
            file_path2 = f'{path}/{pic2}'
            if file_path1 == file_path2:
                continue

            
            if filecmp.cmp(file_path1, file_path2):
                dupes.add(pic1)
                dupes.add(pic2)

    dupes = list(dupes)
    return dupes


if __name__ == '__main__':
    dupes = get_dupelicated_files()
    print('number of dupes', len(dupes))
    for dupe in dupes:
        print(dupe)