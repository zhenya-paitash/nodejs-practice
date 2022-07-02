import { Modal, useMantineTheme } from '@mantine/core'

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme()

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className='infoForm'>
        <h3>Your info</h3>

        <div>
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            className='infoInput'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            name='worksAT'
            placeholder='Works at'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            name='livesIN'
            placeholder='Lives in'
            className='infoInput'
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            className='infoInput'
          />
        </div>

        <div>
          <input
            type='text'
            // name='relationship'
            placeholder='RelationShip Status'
            className='infoInput'
          />
        </div>

        <div>
          Profile Image
          <input type='file' name='profileImg' />
          Cover Image
          <input type='file' name='coverImg' />
        </div>

        <button className='btn info-btn'>Update</button>
      </form>
    </Modal>
  )
}

export default ProfileModal
