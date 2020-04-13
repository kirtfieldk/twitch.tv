import git


res = git.Repo.clone_from("https://github.com/kirtfieldk/twitch.tv.git", "./repo")
new_branch = res.create_head("s", "97b1ebbf6ff893e2f35b53e96515467a20d7d522")
old_branch = res.create_head("sw", "9a7563312eb37f3411235b1c8d67ecdbab6cf877")
new_branch = res.head.commit
for line in new_branch.diff("9a7563312eb37f3411235b1c8d67ecdbab6cf877").iter_change_type('A'):
    print(line)

# https://github.com/kirtfieldk/twitch.tv.git